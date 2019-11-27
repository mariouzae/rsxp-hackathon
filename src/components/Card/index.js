import React from 'react';
import * as lib from '../../dependencies';

const useStyles = lib.makeStyles({
    card: {
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 140,
    },
});

export default function Card(props) {
    const classes = useStyles();
    const { name, logoUrl, description } = props.obj.data;

    return (
        <lib.Card className={classes.card}>
            <lib.CardActionArea>
                <lib.CardMedia
                    className={classes.media}
                    image={logoUrl}
                    title={name}
                />
                <lib.CardContent>
                    <lib.Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </lib.Typography>
                    <lib.Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </lib.Typography>
                </lib.CardContent>
            </lib.CardActionArea>
            <lib.CardActions>
                <lib.Button size="small" color="primary">
                    Agendar Visita
                </lib.Button>
                <lib.Button size="small" color="primary">
                    Veja mais
                </lib.Button>
            </lib.CardActions>
        </lib.Card>
    );
}