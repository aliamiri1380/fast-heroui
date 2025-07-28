
"use client"

// Example usage in an App Router component
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  // return (
  //   <GestureHandlerRootView style={{ flex: 1 }}>
  //     <div>Gesture Handler Root View!</div>
  //   </GestureHandlerRootView>
  // );
}



// "use client"

// import React, { useState, useCallback } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet'; // Import Bottom Sheet
// import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Required for gesture handling

// export default () => {
//   const [open, setOpen] = useState(false);
//   const bottomSheetRef = React.useRef(null);

//   const snapPoints = ['25%', '50%', '90%']; // Define snap points for the Bottom Sheet

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <Button title="Open Bottom Sheet" onPress={handleOpen} />

//       <BottomSheet
//         ref={bottomSheetRef}
//         index={-1} // Initially closed
//         snapPoints={snapPoints} // Define snap points
//         onChange={(index) => console.log('Bottom Sheet snap index:', index)}
//         onClose={handleClose}
//       >
//         <View style={styles.content}>
//           <Text style={styles.text}>This is the bottom sheet content!</Text>
//         </View>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     color: '#333',
//   },
// });
