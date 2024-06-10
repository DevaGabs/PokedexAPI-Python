from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from pydantic import BaseModel

Base = declarative_base()

class Pokemon(Base):
    __tablename__ = 'pokemons'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String, index=True)

    
class Pokemon(BaseModel):
    name: str
    url: str
   
