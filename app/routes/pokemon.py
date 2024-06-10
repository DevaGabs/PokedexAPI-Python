from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import Pokemon
from app.database import SessionLocal
from app.utils.fetch_data import fetch_pokemon_list
from typing import List

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/pokemon", response_model=List[Pokemon])
async def read_pokemon(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    try:
        pokemon_data = await fetch_pokemon_list(offset=skip, limit=limit)
        pokemons = pokemon_data["results"]
        return [Pokemon(**pokemon) for pokemon in pokemons]
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=e.response.text)