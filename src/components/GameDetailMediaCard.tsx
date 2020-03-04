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

import React from "react";
import { Card, CardMedia, CardActions } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { PlaystationObject } from "playstation";
import PlayStationGameService from "../services/PlayStationGameService";

interface GameDetailMediaCardProps {
    playStationGameService: PlayStationGameService;
    game: PlaystationObject;
}

export default class GameDetailMediaCard extends React.Component<GameDetailMediaCardProps> {
    render() {
        const initialPrice = this.props.playStationGameService.getInitialPrice(this.props.game);
        const currentPrice = this.props.playStationGameService.getCurrentPrice(this.props.game);
        const psPlusPrice = this.props.playStationGameService.getPsPlusPrice(this.props.game);

        const price: JSX.Element[] = [
            <FontAwesomeIcon key={"shopping-cart-" + this.props.game.id} icon={faShoppingCart} size="1x" />,
        ];
        if (initialPrice === currentPrice) {
            price.push(
                <div key={"detail-price-" + this.props.game.id} className="Game-detail-price">
                    {currentPrice}
                </div>,
            );
        } else {
            // price.push(<div className="Game-detail-inactive-price">{initialPrice}</div>);
            price.push(
                <div key={"sale-price-" + this.props.game.id} className="Game-detail-sale-price">
                    {currentPrice}
                </div>,
            );
        }

        if (psPlusPrice) {
            price.push(
                <div key={"ps-plus-price-" + this.props.game.id} className="Game-detail-ps-plus-price">
                    {psPlusPrice}
                </div>,
            );
        }

        return (
            <Card
                className="App-clickable"
                onClick={() => {
                    window.open(this.props.playStationGameService.getStoreGameLink(this.props.game.id), "_blank");
                }}
            >
                <CardMedia
                    component="img"
                    loading="lazy"
                    image={this.props.playStationGameService.getPreviewImage(this.props.game)}
                    title={this.props.game.name}
                    placeholder={this.props.game.name}
                />

                <CardActions>{price}</CardActions>
            </Card>
        );
    }
}
