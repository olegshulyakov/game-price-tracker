/*
 * Copyright 2020 Oleg Shulyakov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import GamePreviewCard from "./GamePreviewCard";
import GamePreviewBadge from "./GamePreviewBadge";
import StoreGridItem from "./StoreGridItem";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: blue,
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Roboto"',
            '"Oxygen"',
            '"Ubuntu"',
            '"Cantarell"',
            '"Fira Sans"',
            '"Droid Sans"',
            '"Helvetica Neue"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});
theme = responsiveFontSizes(theme);

export { theme, GamePreviewCard, GamePreviewBadge, StoreGridItem };
