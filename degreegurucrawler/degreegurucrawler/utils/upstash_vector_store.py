import os
import requests
from typing import List
from upstash_vector import Index

class UpstashVectorStore:

    def __init__(
            self,
            url: str,
            token: str
    ):
        self.api_key = os.environ.get("OPENAI_API_KEY")
        self.index = Index(url=url, token=token)

    def get_embeddings(
            self,
            documents: List[str],
            model: str = "text-embedding-ada-002"
    ) -> List[List[float]]:
        """
        Given a list of documents, generates and returns a list of embeddings
        """
        documents = [document.replace("\n", " ") for document in documents]
        response = requests.post(
            "https://api.openai.com/v1/embeddings",
            headers={"Authorization": f"Bearer {self.api_key}"},
            json={"input": documents, "model": model},
        )
        response.raise_for_status()
        embeddings_data = response.json()["data"]
        return [d["embedding"] for d in embeddings_data]

    def add(
            self,
            ids: List[str],
            documents: List[str],
            link: str
    ) -> None:
        """
        Adds a list of documents to the Upstash Vector Store
        """
        embeddings = self.get_embeddings(documents)
        self.index.upsert(
            vectors=[
                (
                    id,
                    embedding,
                    {
                        "text": document,
                        "url": link
                    }
                )
                for id, embedding, document
                in zip(ids, embeddings, documents)
            ]
        )
