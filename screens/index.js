// import { useState, useEffect } from "react";
// import {firebase} from 'firebase';
// import moment from "moment";
// import {collatedTaskExist}from 'helpers';

// const collatedTask = () => {};

// export const useTasks = selctedProject => {
//     const[task, setTasks] = useState([]);
//     const[archivedTasks, setArchiveTasks] = useState([]);

//     useEffect(() => {
//         let unsubscribe = firebase
//         .firestore()
//         .collection('tasks')
//         .where('userId', '==', 'prototype');

//         unsubscribe = 
//         selectedProject && !collatedTaskExist(selectedProject)
//         ?(unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
//         :selectedProject == 'TODAY'
//         ?(unsubscribe = unsubscribe.where('date','==', moment().format('DD/MM/YYYY') ))
//         :selctedProject == 'INBOX' || selectedProject === 0
//         ?(unsubscribe = unsubscribe.where('date', '==', ''))
//         :unsubscribe;
        
//         unsubscribe = unsubscribe.onSnapshoty(snapshot => {
//             const newTasks = snapshot.docs.map(task => ({
//                 id: task.id, 
//                 ...task.data(),    
//             }));

//             setTasks(
//                 selectedProject == 'NEXT_7'
//                 ? newTasks.filter(
//                     task =>
//                     momet(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
//                     task.archived !== true
//                 )
//                 :newTasks.filter(task => task.archived!== true)
//             );

//             setArchiveTasks(newTasks.filter(task => task.archived !== false));


//         });
//         return () => unsubscribe();
//     }, [selectedProject]);
    
//     return {tasks, archivedTasks};
// };

// export const useProject = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(()=>{
//         firebase
//             .firestore()
//             .collection('projects')
//             .where('userId', '==', 'prototype')
//             .orderBy('projectId')
//             .get()
//             .then(snapshot => {
//                 const allProjects = snapshot.docs.map(project => ({
//                     ...project.data(),
//                     docId: project.id,
//                 }));
                
//                 if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
//                     setProjects(allProjects);
//                 }
//             });

//     }, [projects]);

//     return { project , setProjects};
// }