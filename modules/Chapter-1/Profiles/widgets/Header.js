import { View, Text } from 'react-native'
import React from 'react'

export default function Header() {
    const name = "Febry";
    //name = "Isnan";
    let place_dob = "Jakarta";
    place_dob = "Depok"
    var weight = 80.9;

    //Object variable
    const person = {
        id: 1,
        name:name,
        place_dob: place_dob,
        weight: weight
    }

    const arrPerson = [
        {
            id: 1,
            name:name,
            place_dob: place_dob,
            weight: weight
        },
        {
            id: 2,
            name:"Isnan",
            place_dob: "Jakarta",
            weight: 90.0
        }   
    ]

  return (
    <View>
      <Text>Nama: { name } </Text>
      <Text>Place: { place_dob } </Text>
      <Text>Weight: { weight } </Text>
      {/* <Text>Sample an Object</Text>
      <Text>Nama: { person.name } </Text> 
      <Text>Place: { person.place_dob } </Text>
      <Text>Weight: { person.weight } </Text>
      <Text>Sample an Array Object</Text>
      {
        arrPerson.map((v,index)=>(
            <View key={index}>
                <Text>
                    {index}). {v.name} - {v.place_dob} - {v.weight}
                </Text>
            </View>
        ))
      } */}
      <TextName place={place_dob}  data={person} />
      <TextName2 place={place_dob}  data={person} />
    </View>
  )
}

const TextName = ({ data, place }) =>{
    return (
        <View>
        <Text>Hi my name is {data.name}</Text>
        <Text>Place {place}</Text>
        </View>
    )
}

const TextName2 = (props) =>{
    return (
        <View>
        <Text>Hi my name is {props.data.name}</Text>
        <Text>Place {props.place}</Text>
        </View>
    )
}