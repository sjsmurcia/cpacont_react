from fastapi import FastAPI

app = FastAPI(
    title="CPA Contable API",
    description="API inicial para el prototipo contable de CPA.",
    version="0.1.0",
)


@app.get("/health", tags=["estado"])
def health_check() -> dict[str, str]:
    return {"status": "ok"}
