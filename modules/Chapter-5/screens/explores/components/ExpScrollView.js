import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Body2UI from './Body2UI';

const Book = [
    {id:1, title:"Cinderella", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/04/05.png?fit=900%2C900&ssl=1", author:"Sophie", rating:"1", views:100, sinopsis:"The fairytale of Cinderella, a young girl who finds out that dreams really can come true.", story:"" },
    {id:2, title:"Snow White", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/04/Snow-White-and-the-Seven-Dwarfs-Cover.png?fit=300%2C300&ssl=1", author:"nunu", rating:"2", views:100, sinopsis:"The fairytale of Snow White, who is the fairest of them all, with a modern twist.", story:"" },
    {id:3, title:"Aladdin", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/07/Aladdin-Bedtime-Story-Cover.png?fit=350%2C350&ssl=1", author:"rohmah", rating:"3", views:100, sinopsis:"Aladdin, the Genie, work to impress the princess who wishes to be a commoner.", story:"" },
    {id:4, title:"Rapunzel", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/Cover-2.png?fit=350%2C350&ssl=1", author:"naila", rating:"4", views:100, sinopsis:"An evil witch has trapped Rapunzel in a tower. Can her long hair or love save her?", story:"" },
    {id:5, title:"Pinnochio", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/04/Pinocchio_Final_2.jpg?fit=1536%2C1536&ssl=1", author:"andin", rating:"5", views:100, sinopsis:"The fairytale of Pinocchio. If he is to become a real boy, he has to learn to be honest.", story:"" },
    {id:6, title:"Bambi", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/01/Bambi4.png?fit=1536%2C1536&ssl=1", author:"Sophie", rating:"1", views:100, sinopsis:"The tale of a male deer, Bambi, his mother and his adventures about learning in the woods.", story:"" },
    {id:7, title:"Mulan", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/01/Mulan-Cover.png?fit=350%2C350&ssl=1", author:"nunu", rating:"2", views:100, sinopsis:"A legend tale about a girl who goes in disguise as a boy and joins the army in her brother's place.", story:"" },
    {id:8, title:"Pocahontas", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2018/09/Pocahontas11.png?fit=1536%2C1536&ssl=1", author:"rohmah", rating:"3", views:100, sinopsis:"The story tells of the time Pocahontas saved the life of settler John Smith from her father.", story:"" },
    {id:9, title:"Sleeping Beauty", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2019/05/Sleeping-Beauty_7.png?fit=1536%2C1536&ssl=1", author:"naila", rating:"4", views:100, sinopsis:"A Princess is cursed by Maleficent and put into a deep sleep for 100 years. Who can save her?", story:"" },
    {id:10, title:"Hansel and Gretel", img:"https://i0.wp.com/storiestogrowby.org/wp-content/uploads/2020/12/Hansel_Gretel_5-1-scaled.jpg?fit=1536%2C1536&ssl=1", author:"risma", rating:"5", views:100, sinopsis:"When Hansel and Gretel go in search of food, they find a gingerbread house. But who is inside?", story:"" },

]

const ExpScrollView = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {Book.map((value, id) => (
                <Body2UI key={id} books={value} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
    },
});

export default ExpScrollView;