export const CREATE_MEASURE = 'CREATE_MEASURE';

export default function createMeasure(measureData) {
    return {
        type : CREATE_MEASURE,
         measureData
    }
}