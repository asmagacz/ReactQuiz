/** @format */

import {Navigation} from "react-native-navigation";
import QuizScreen from './screens/Quiz'
import ScoreScreen from './screens/ScoreScreen'
import TestScreen from './screens/TestScreen'


Navigation.registerComponent(`QuizScreen`, () => QuizScreen);
Navigation.registerComponent(`ScoreScreen`, () => ScoreScreen)
Navigation.registerComponent(`TestScreen`, () => TestScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        stack: {
          id: 'AppStack',
            children: [
                {
                  component: {
                    name: 'QuizScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Quiz'
                        }
                      }
                    }
                  }
                }
            ]
        }
    }
  });
});
