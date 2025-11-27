import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolation, interpolate, useAnimatedStyle, type SharedValue } from 'react-native-reanimated';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

interface RestaurantHeaderProps {
    title: string;
    scrollOffset: SharedValue<number>;
}
const SCROLL_THRESHOLD = 60;


const RestaurantHeader = ({title, scrollOffset}: RestaurantHeaderProps) => {
    const insets = useSafeAreaInsets()

    const header1Style = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value,
            [0, SCROLL_THRESHOLD * 0.6],
            [1, 0],
            Extrapolation.CLAMP
        )

        const translateY = interpolate(
            scrollOffset.value,
            [0, SCROLL_THRESHOLD * 0.6],
            [0, -10],
            Extrapolation.CLAMP
        )

        return {
            opacity,
            transform: [{ translateY }]
        }
    }) 

    const header2Style = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value,
            [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
            [0, 1],
            Extrapolation.CLAMP
        )

        const translateY = interpolate(
            scrollOffset.value,
            [SCROLL_THRESHOLD * 0.3, SCROLL_THRESHOLD],
            [-10, 0],
            Extrapolation.CLAMP
        )

        return {
            opacity,
            transform: [{ translateY }]
        }
    }) 

    const shadowStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollOffset.value,
            [0, SCROLL_THRESHOLD],
            [0, 1],
            Extrapolation.CLAMP
        )
        return {
            shadowOpacity: opacity * 0.1,
            elevation: opacity * 4
        }
    })
    const header2PointerEventsStyle = useAnimatedStyle(() => {
        const pointerEvents = scrollOffset.value > SCROLL_THRESHOLD * 0.3 ? 'auto' : 'none';
        return {
            pointerEvents: pointerEvents as 'auto' | 'none', 
        }
    })
  return (
    <Animated.View style={[styles.headerContent, shadowStyle, {paddingTop: insets.top +20 }]}>
        {/* Header 1 */}
      <Animated.View style={[styles.header1, header1Style]}>
        <Link href={'/(app)/(auth)/(modal)/location'} asChild>
            <TouchableOpacity style={styles.locationBtn}>
                <View style={styles.locationBtnIcon}>
                    <Ionicons name="business-outline" size={16} />
                </View>
                <Text style={styles.locationText}>Madurai</Text>
                <Ionicons name='chevron-down' size={16}/>
            </TouchableOpacity>
        </Link>
        <View style={styles.rightIcons}>
            <Link href={'/(app)/(auth)/(modal)/filter'} asChild>
                <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name='filter' size={20} />
                </TouchableOpacity>
            </Link>
            <TouchableOpacity style={styles.iconBtn}>
                <Ionicons name='map-outline' size={20} />
            </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header 2 */}
      <Animated.View style={[styles.header2, header2Style, header2PointerEventsStyle]}>
        <View style={styles.centerContent}>
            <Text style={styles.titleSmall}>{title}</Text>
            <Link href={'/(app)/(auth)/(modal)/location'} asChild>
            <TouchableOpacity style={styles.locationSmall}>
                <Text style={styles.locationSmallText}>Madurai</Text>
                <Ionicons name='chevron-down' size={16}/>
            </TouchableOpacity>
            </Link>
        </View>
        <View style={styles.rightIcons}>
            <Link href={'/(app)/(auth)/(modal)/filter'} asChild>
                <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name='filter' size={20} />
                </TouchableOpacity>
            </Link>
        </View>
      </Animated.View>
    </Animated.View >
  )
}

export default RestaurantHeader

const styles = StyleSheet.create({
    headerContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        zIndex: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 4,
    },
    header1: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        gap: 6
    },
    locationText: {
        fontSize: 14,
        fontWeight: '400',

    },
    locationBtnIcon: {
        borderRadius: 20,
        backgroundColor: Colors.light,
        padding: 10,
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconBtn: {
        width: 40,
        height: 40,
        backgroundColor: Colors.light,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 40
    },
    titleSmall: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 2,
    },
    locationSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    locationSmallText: {
        fontSize: 12,
        color: Colors.muted,
    }
})