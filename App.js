import { Text, View, StyleSheet, ScrollView, ImageBackground, Image, Pressable } from 'react-native';
import {Audio} from 'expo-av';

//function to play sound
function PlaySoundeffect(){
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/titan1.mp3'));
      await sound.setVolumeAsync(1);
      await sound.playAsync(true);
      await sound.setIsLoopingAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

export default function App() {
  PlaySoundeffect();
  return (
    <View style={{flex: 1, margin: 10, padding: 10}}>
    <ImageBackground source={require('./assets/Window')} 
    style={{width:'100%', height:'100%'}}>
    <ScrollView>
      <View style={{flex: 2}}>
        <Text style={{textAlign: 'center', fontSize: 35}}>
        {'\n'}FanFiction Reconmendations
        </Text>
      </View>

      <View style={{flex: 6}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          1. Memoirs of a Suicidal Pirate
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Author :</Text> Marshmellowtime
          </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Place :</Text> FanFiction.Nme
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Source :</Text> One Pieme
            </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Description :</Text> Getting murdered while trying to kill yourself is bad luck. Getting reincarnated after that is just 
            a bad joke. But Toonami reruns and cheap commissions info have taught her this world has plenty of chances to get 
            yourself killed. It can't be that hard. "So you're actually tring to die?" "Yes." "You know your're his nakama now, 
            right?" "So?" "...Good luck with that."
        {'\n'}
        </Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          2.From The Sea - Divergence
          </Text>
          <Text>
            <Text style={{fontWeight: "bold"}}> Author :</Text> SugarFeather
            </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Place :</Text> FanFiction.Net, AO3
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Source :</Text> One Pieme
            </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Description :</Text> A young, dreamless girl closes her eyes in the Mediterranean Sea, and opens them in the middle
            of East Blue. (How do you go on, when everything you have ever known and loved is gone, and everything left
            to love should be a paper-thin lie?)
        {'\n'}
        </Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          3. Kaien's Fate, Aizen's Experiment and Ichigo's Sister
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Author :</Text> SeerKing
          </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Place :</Text> Fanfiction.Net
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Source :</Text> Bleach
            </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Description :</Text> Shiba Kaien died at the hand of Kuchiki Rukia after being possessed by a Hollow. This is well
            known. What if Aizen drew Metastacia from Hueco Mundo and extracted some reiatsu belonging to Kaien for 
            another experiment? This is the tale of the result of that experiment; Kurosaki Kirika.
        {'\n'}
        </Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          4. Destined to Collide
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Author :</Text> Artemis615
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Place :</Text> Fanfiction.Net
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Source :</Text> Jujutsu Kaisen
            </Text>
          <Text>
           <Text style={{fontWeight: "bold"}}> Description :</Text> Maguro, a new student straight up chucked into the 2nd year batch by Gojo quietly. Toge met her
            by accident and found out she could hear his thoughts, as if he's talking like a normal person. From then on,
            she gained Toge's undivided attention. And afterwards, she gained the enemy's undivided attention.
        {'\n'}
        </Text>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          5. Pretending to Hate (The Pretender series)
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Author :</Text> ohmygoth1807
          </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Place :</Text> Wattpad
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Source :</Text> Harry Potter
            </Text>
          <Text>
          <Text style={{fontWeight: "bold"}}> Description :</Text> Valentine Lestrange is the only child of Bellatrix and Rodolphus Lestrange. When her parents
            are sentenced to life in Azkaban for her crimes, she is placed into the care of the Malfoy's. Dumbledore has a 
            mission to ensure Harry Potter's life and intends to include the intelligent, powerful and witty Valentine 
            Lestrange in this. She must play the part of a hateful, sadistic and Muggle loadthing Slytherin the world 
            knows Lestrange's to be. Can she fool everyone she's ever met into believing that she's just like her mother?
            Can she keep Harry alive?
        {'\n'}
        </Text>

      </View>

      <View style={{flex: 2}}>
        <Text style={{textAlign: 'center', fontSize: 11, fontWeight: 'bold'}}>
        Written By: Law Meh
        </Text>
      </View>

    </ScrollView>
    </ImageBackground>
    </View>
  );
}
