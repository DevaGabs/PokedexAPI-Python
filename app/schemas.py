from pydantic import BaseModel

class PokemonBase(BaseModel):
    id: int
    name: str
    type: str
 

    class Config:
        orm_mode = True
