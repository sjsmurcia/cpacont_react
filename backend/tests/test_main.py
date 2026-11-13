from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_check_reports_service_as_available() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
