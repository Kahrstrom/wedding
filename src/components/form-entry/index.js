import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';  
import { Dialog } from 'react-toolbox/lib/dialog';
import FormInput from '../form_input/';
import Button from 'react-toolbox/lib/button';
import theme from './theme.scss';
import { Link } from 'react-router';
import { addEntry } from '../../actions/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CircularLoader from '../circular_loader';

class FormEntry extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    reRoute = () => {
        this.context.router.push('/');
    }

    actions = [
        { label: "Ok", onClick: this.reRoute }
    ]

    componentWillMount() {
        const waiting = false;
        const submitted = false;
        this.setState({waiting, submitted});
   }

    onSubmit(props) {
        let waiting = true;
        const submitted = true;
        this.setState({waiting});
        this.props.addEntry(props).then(() => { 
            waiting = false;
            this.setState({submitted, waiting});
        });
    }

    render() {
        if(this.state.waiting){
            return (
                <CircularLoader />
            );
        }
        const { fields: { name, participants, comment, food }, handleSubmit, reset } = this.props;
        return (
           <Grid>
               <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                  <Card className={theme.formContainer}>
                     <CardTitle
                           title="Anmälan"
                           subtitle="Anmäl er och skriv ner eventuella matpreferenser/kommenatarer. Gör en anmälan per person som kommer så blir det lättare för oss att hålla koll :)" />
                     <CardText>
                           <Field component={FormInput} type="text" label="Namn" name="name" {...name} />
                           {/*<Field component={FormInput} type="alcohol" label="" name="participants" {...participants} />*/}
                           
                           <Field component={FormInput} type="textarea" multiline={true} label="Matpreferenser (veg, allergier etc.)" name="food" {...food} />
                           <Field component={FormInput} type="textarea" multiline={true} label="Kommentar" name="comment" {...comment} />
                     </CardText>
                     <CardActions>
                           <Button raised ripple accent className="submit-button" type="submit" label="Anmäl!" />
                           <Link to="/">
                              <Button raised ripple label="Avbryt" />
                           </Link>
                     </CardActions>
                  </Card>
               </form>
               <Dialog
                    actions={this.actions}
                    active={this.state.submitted}
                    onEscKeyDown={this.reRoute}
                    title='Anmälan gick fint!'
                    >
                    <p>Du är nu anmäld!</p>
                </Dialog>
            </Grid>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.name){
        errors.name = 'Du måste ange ett namn';
    }
    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispathToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
FormEntry = reduxForm({
    form: 'EntryForm',
    fields: ['name', 'participants', 'comment', 'food'],
    validate
})(FormEntry);

FormEntry = connect(null, { addEntry })(FormEntry);

export default FormEntry;

 