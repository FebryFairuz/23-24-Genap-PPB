// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';


const ListBook = [
  {
    id: 1,
    title: "Giraffes Can't Dance",
    img: require("./assets/books-cover/giraffes-cant-dance.jpg"),
    author: "Giles Andreae",
    genre: ["Children's Fiction", "Self-Help"],
    rating: 5,
    views: 100,
    sinopsis: "This charming tale follows Gerald the giraffe, who feels left out at the Jungle Dance because of his clumsy dancing. With the help of a wise friend, Gerald learns that sometimes it just takes a different tune to find your rhythm and dance to your own beat.",
    story: "In the heart of the jungle, Gerald the giraffe watches his animal friends dance gracefully at the annual Jungle Dance. Despite his longing to join in, Gerald feels self-conscious about his awkward dancing. The other animals mock him, and Gerald retreats into sadness. Just when he's about to give up, a wise cricket appears and teaches Gerald that everyone can dance when they find music that speaks to their heart. With newfound confidence, Gerald discovers his unique rhythm and dances joyfully under the moonlit sky, inspiring others to embrace their differences and dance to their own tune."
  },
  {
    id: 2,
    title: "The Little Prince",
    img: require("./assets/books-cover/the-little-prince.jpg"),
    author: "Antoine de Saint-Exupery",
    genre: ["Fantasy", "Philosophy"],
    rating: 5,
    views: 100,
    sinopsis: "Antoine de Saint-Exupéry's timeless classic tells the story of a young prince who travels from planet to planet, meeting a variety of characters and learning important life lessons along the way. Through his encounters, he discovers the value of love, friendship, and the beauty of innocence.",
    story: "In the vast expanse of the universe, a young prince embarks on a journey from his tiny planet to explore the mysteries of the cosmos. Along the way, he encounters quirky inhabitants of various planets, each with their own peculiarities and wisdom. Through his adventures, the little prince learns profound truths about human nature, the importance of love and friendship, and the beauty of seeing the world through the eyes of innocence. Ultimately, he discovers that what truly matters cannot be seen with the eyes but felt with the heart."
  },
  {
    id: 3,
    title: "Have You Filled A Bucket Today?",
    img: require("./assets/books-cover/have-you-filled-a-bucket-today.jpg"),
    author: "Carol McCloud",
    genre: ["Children's Literature", "Self-Help"],
    rating: 5,
    views: 100,
    sinopsis: "This heartwarming book introduces the concept of 'bucket filling' as a metaphor for expressing kindness and appreciation towards others. Through simple yet profound illustrations and language, readers learn the power of empathy, compassion, and positivity in filling not only others' buckets but also their own.",
    story: "In a world where everyone carries an invisible bucket, young Felix learns the importance of filling others' buckets with acts of kindness and positivity. Inspired by his teacher's metaphorical lesson, Felix sets out on a mission to spread joy and happiness wherever he goes. From complimenting a classmate to helping a friend in need, Felix discovers that small gestures can have a big impact on others' well-being. As he fills the buckets of those around him, Felix realizes that his own bucket is overflowing with happiness, proving that kindness is contagious and that the more you give, the more you receive."
  },
  {
    id: 4,
    title: "Harry Potter and the Cursed Child - Parts I & II",
    img: require("./assets/books-cover/harry-potter.jpg"),
    author: "J. K. Rowling",
    genre: ["Fantasy", "Young Adult"],
    rating: 5,
    views: 100,
    sinopsis: "Set nineteen years after the events of the original series, 'Harry Potter and the Cursed Child' follows Harry Potter's youngest son, Albus Severus Potter, as he navigates the challenges of Hogwarts School of Witchcraft and Wizardry. The story explores themes of friendship, family, and the enduring power of love amidst the shadows of the past.",
    story: "Nineteen years after the Battle of Hogwarts, Harry Potter is now a Ministry of Magic employee and a father of three. His youngest son, Albus Severus Potter, grapples with the weight of his family legacy as he begins his journey at Hogwarts. Struggling to live up to the expectations set by his father's heroic past, Albus forms an unlikely friendship with Scorpius Malfoy, son of Draco Malfoy. Together, they embark on an adventure through time and space, confronting dark forces and uncovering long-hidden secrets. As they navigate the challenges of friendship, loyalty, and identity, Albus and Scorpius learn that true bravery lies in embracing who you are and standing up for what you believe in, even in the face of adversity."
  },
  {
    id: 5,
    title: "There Was an Old Lady Who Swallowed a Fly",
    img: require("./assets/books-cover/there-was-an-old.jpg"),
    author: "Pam Adams",
    genre: ["Children's Literature", "Nursery Rhyme"],
    rating: 5,
    views: 100,
    sinopsis: "Based on the classic cumulative rhyme, this humorous and quirky tale follows an old lady who swallows increasingly larger animals, with comical consequences. Children will delight in the absurdity of the story and the playful repetition of the refrain, 'I don't know why she swallowed a fly.'",
    story: "In a whimsical and absurd tale, an old lady with an insatiable appetite begins her peculiar feast by swallowing a fly. To remedy this, she swallows a spider to catch the fly, followed by a bird to catch the spider, and so on, until she engulfs a horse. With each gulp, her predicament becomes more outrageous, leading to a hilariously chaotic conclusion. Through playful repetition and absurdity, young readers are entertained while learning about cause and effect, and the consequences of indulgence."
  },
  {
    id: 6,
    title: "Wonder",
    img: require("./assets/books-cover/wonder.jpg"),
    author: "R. J. Palacio",
    genre: ["Young Adult", "Realistic Fiction"],
    rating: 5,
    views: 100,
    sinopsis: "R.J. Palacio's poignant novel tells the story of Auggie Pullman, a young boy with a facial deformity who enters mainstream school for the first time in fifth grade. Through multiple perspectives, readers witness Auggie's journey of self-discovery, friendship, and acceptance, as he teaches those around him the true meaning of kindness and empathy.",
    story: "Auggie Pullman, born with a facial deformity, has always been homeschooled to shield him from stares and judgment. But as he enters fifth grade, his parents enroll him in a mainstream school, where he faces the challenges of fitting in and overcoming prejudice. Despite initial setbacks and cruel taunts from classmates, Auggie's resilience and inner strength shine through as he forges unlikely friendships and wins over hearts with his courage and kindness. Through the alternating perspectives of Auggie, his family, and peers, readers gain insight into the complexities of acceptance and empathy, and the transformative power of choosing kindness in the face of adversity."
  }
]

export default function App() {
  var indexBuku = 4;
 
  const bottomSheetRef = React.useRef(null);
  const bottomSheetRef2 = React.useRef(null);
  const snapPoints = React.useMemo(() => ['10%', '15%'], []);
  const snapPoints2 = React.useMemo(() => ['1%','30%', '90%'], []);

  const openBottomSheet = () => {
    bottomSheetRef2.current?.expand();
  };

  const [sheetIndex, setSheetIndex] = React.useState(0);



  return (
    <GestureHandlerRootView style={styles.container}>
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.navbar}>
        <View style={styles.navbarSection}>
          <Icon name="arrow-back" size={25} color="#fff" onPress={() => {}} />
        </View>
        <View style={styles.navbarSection}>
          <Text style={styles.navbarText}>Book Detail</Text>
        </View>
        <View style={[styles.navbarSection, styles.rightSection]}>
          <Icon name="ellipsis-vertical" size={25} color="#fff" onPress={() => {}} />
        </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', marginTop:10, height: 350}}>
        <Image source={ListBook[indexBuku]['img']} resizeMode="contain" style={{transform: [{scale: 1.4}]}}/>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
          {ListBook[indexBuku]['title']}
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          a Book by {ListBook[indexBuku]['author']}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
          {ListBook[indexBuku]['genre'].map((genre, index) => (
            <View key={index} style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 64, backgroundColor: "#0b203f", marginHorizontal: 2 }}>
              <Text style={{ color: 'white' }}>
                {genre}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
          <Icon name="ellipsis-horizontal" size={20} color="#0b203f" />
        </View>
        <View style={{ marginTop: 12, justifyContent: 'center', paddingHorizontal: 28 }}>
          <Text style={{ textAlign: 'justify' }}>
            {ListBook[indexBuku]['sinopsis']}
          </Text>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: '#eaa830', borderTopLeftRadius: 30, borderTopRightRadius: 30 }]} />
        )}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaa830', paddingHorizontal: 30 , justifyContent: "space-evenly"}}>
          <TouchableOpacity onPress={() => openBottomSheet()} style={{ flexDirection: 'row', backgroundColor: '#0b203f', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 30 }}>
            <Icon name="book" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', backgroundColor: '#0b203f', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 30 }}>
            <Icon name="heart" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>
              Add to Favorite
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        index={0}
        enablePanDownToClose
        onChange={setSheetIndex}
        snapPoints={snapPoints2}
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} visible={sheetIndex !== 0} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
        )}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: '#eaa830', borderTopLeftRadius: 30, borderTopRightRadius: 30 }]} />
        )}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#eaa830', paddingHorizontal: 30 , justifyContent: "space-evenly"}}>
        <Text style={{ fontSize: 18 }}>
          Story of the Book <Text style={{fontWeight: 'bold'}}>{ListBook[indexBuku]['title']}</Text>
        </Text>
        <Text style={{ marginTop:10, textAlign:'justify' }}>
          {ListBook[indexBuku]['story']}
        </Text>
        </View>
      </BottomSheet>

    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  navbar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#eaa830',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navbarSection: {
    flex: 1,
  },
  navbarText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
});
