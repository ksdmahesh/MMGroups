import { createMuiTheme, Theme } from "@material-ui/core";
import BaseComponent from "../view/shared/helper/baseComponent";

export const themes = createMuiTheme({

})

export const useStyles: any = (theme: Theme) => ({
    placeholder: (props: any) => ({
        '& button': BaseComponent.getTheme(props.isDarkTheme, 'drawer')
    }),
    contentStyle: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: (props: any) => (props.isDrag ? 'hidden' : 'auto')
    },
    drawer: (props: any) => BaseComponent.getTheme(props.isDarkTheme, 'drawer')
})
