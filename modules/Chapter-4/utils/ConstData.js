const UserList = [
    {id:1, username:"mira", email:"mira@student.ibik.ac.id", password:"mira@123"},
    {id:2, username:"carlos", email:"carlos@student.ibik.ac.id", password:"carlos@321"},
]

const ListBook = [
    {id:1, title:"Book 1", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" },
    {id:2, title:"Book 2", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" },
    {id:3, title:"Book 3", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" },
    {id:4, title:"Book 4", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" },
    {id:5, title:"Book 5", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" },
    {id:6, title:"Book 6", img:"", author:"", ratting:5, views:100, sinopsis:"", story:"" }
]

const ListCateg = [
    {id:1, name:"Recomendations", books:[1,3,5,2]},
    {id:2, name:"Recently", books:[6,5,4,2]},
    {id:3, name:"Populer", books:[3,2,1,4]},
]//Mapping

const Genres = [
    {id:1, name:"Fiksi", icon:"", books:[1,3,5]},
    {id:2, name:"Non Fiksi", icon:"", books:[1,3,5]},
    {id:3, name:"Komedi", icon:"", books:[1,3,5]},
    {id:4, name:"Horor", icon:"", books:[1,3,5]},
]

const History = [
    {user_id:1, book_id:1, viewed_at:"2024-05-20 10:00"},
    {user_id:1, book_id:2, viewed_at:"2024-05-20 10:00"},
]

const MyFavorite = [
    {user_id:1, books:[3,2,1]},
    {user_id:2, books:[4,2,3]}
]

export {UserList, ListBook, ListCateg, History, Genres, MyFavorite}