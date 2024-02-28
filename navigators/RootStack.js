import React, { lazy, Suspense } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Analisis = lazy(() => import('./MyScreens/Analisis'));
const PhotoCam = lazy(() => import('./MyScreens/PhotoCam'));
const PhotoCamSec = lazy(() => import('./MyScreens/PhotoCamSec'));
const buscarPaciente = lazy(() => import('./MyScreens/buscarPaciente'));
const perfilPaciente = lazy(() => import('./MyScreens/perfilPaciente'));
const RegistrarPacientes = lazy(() => import('./MyScreens/RegistrarPacientes'));
const PaginaInicial = lazy(() => import('./MyScreens/PaginaInicial'));
const LoginScreen = lazy(() => import('./MyScreens/LoginScreen'));
const Result = lazy(() => import('./MyScreens/Result'));

const HomeIcon = () => <AntDesign name="home" size={24}></AntDesign>;
const changeUIcon = () => <AntDesign name="addusergroup" size={24}></AntDesign>;
const SupportIcon = () => <MaterialIcons name="support-agent" size={24}></MaterialIcons>;
const LogoutIcon = () => <MaterialIcons name="logout" size={24}></MaterialIcons>;

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName='Inicio de Sesion'
            >

                <Stack.Screen name="Inicio de Sesion" component={Login} />
                <Stack.Screen name="Crear Cuenta" component={Singup} />
                <Stack.Screen name="Recuperar Contraseña" component={Recover} />
                <Stack.Screen name="Nueva Contraseña" component={Newpassword} />
                <Stack.Screen name="Verificar Cuenta Creada" component={Verifycount} />
                <Stack.Screen name="Registro Infante" component={Registerinfant} />
                <Stack.Screen name="Registro Contacto Emergencia" component={Registercontactemergency} />
                <Stack.Screen name="Verificar Contacto" component={Verifycontactemergency} />
                <Stack.Screen name="DatosSensores" component={Datas} />
                <Stack.Screen name="DatosInfante" component={Datainfant} />
                <Stack.Screen name="DatosContacto" component={Datacontact} />
                <Stack.Screen name="EditarContacto" component={EditContact} />
                <Stack.Screen name="VerificarActContacto" component={Verifyeditcontact} />
                <Stack.Screen name="RegistrarNewContacto" component={Createnewconatct} />
                <Stack.Screen name="VerificarNewContacto" component={Verifynewcontact} />
                <Stack.Screen name="EditarInfante" component={Editarinfant} />
                <Stack.Screen options={{headerTintColor: primary}} name="Bienvenido" component={Welcome} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;