
function logger(reducer) {
    return (prevState, action) => {

        const nextState = reducer(prevState, action)

        if (action.type === 'add_job') {
            console.group('🆕 ADD JOB')
            console.log('Prev state:', prevState)
            console.log('Action:', action)
            console.log('Next state:', nextState)
            console.groupEnd()
        }


            return nextState
        }
    }
    export default logger