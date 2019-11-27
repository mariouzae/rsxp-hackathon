import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as lib from '../../dependencies';
import { getAll, findByName } from '../../database/companies';
import { addBooking } from '../../database/bookings';
import { Calendar } from '../../components'; 

const useStyles = lib.makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: ''
    },
    select: {
        marginLeft: 30,
    },
    select2: {
        marginLeft: 20,
    },
    success: {
        color: 'green',
    },
}));

export default function FormDialog(props) {
  const { open, handleClose } = props;
  const [companies, setCompanies] = useState([]);
  const [age, setAge] = useState();
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
  const [booked, setBooked] = useState(false);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  useEffect(() => {
      getAll()
        .then((item) => {
        setCompanies(item);
      });
  }, []);

  async function handleSubmit() {
    findByName(age)
        .then(resp => {
            const companyId = resp[0].id;
            addBooking(companyId, 'E0QGVFkhZFmeVUtkWGyg', selectedDate)
                .then(() => {
                    setBooked(true);
                })
        })
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo agendamento</DialogTitle>
        <DialogContent>
          {!booked ? 
            <DialogContentText>
                Selecione a empresa e data para a realização da experiencia.
            </DialogContentText> 
            : <DialogContentText className={classes.success}>
                Agendamento realizado com sucesso!
          </DialogContentText> }

            <div className={classes.root}>
                <lib.InputLabel htmlFor="age-native-simple">Empresa:</lib.InputLabel>
                <lib.Select
                    native
                    className={classes.select}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                    >
                    <option value="" />
                    {companies.map((i, index) => (
                        <option value={i.data.name}>{i.data.name}</option>
                    ))}
                </lib.Select>
            </div>
            <div className={classes.root}>
                <lib.InputLabel htmlFor="age-native-simple">Calendário:</lib.InputLabel>
                <div className={classes.select2}>
                <Calendar date={selectedDate} handleDateChange={handleDateChange} />
                </div>
            </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Agendar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}