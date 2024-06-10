import httpx

BASE_URL = "https://pokeapi.co/api/v2/pokemon"

async def fetch_pokemon_list(offset: int = 0, limit: int = 10):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{BASE_URL}?offset={offset}&limit={limit}")
        response.raise_for_status()
        return response.json()