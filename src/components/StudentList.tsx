import * as React from 'react';
import { TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { Student } from '../redux/students';
import { connect } from 'react-redux';

interface Props { students: ReadonlyArray<Student>; }

function StudentList({ students }: Props) {
    return (
        <FlatList data={students} renderItem={_renderItem} style={styles.container} />
    );
}

function _renderItem({ item }: { item: Student }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.class}</Text>
        </TouchableOpacity>
    );
}

export default connect(function ({ students }: Props) { return { students }; })(StudentList);

const styles = StyleSheet.create({
    container: {
        top: 20,
        flex: 1,
    },
    item: {
        height: 60,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 30,
        left: 10
    },
    subtitle: {
        left: 10,
        fontSize: 15
    }
});
