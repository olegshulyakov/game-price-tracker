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

import {updateStoreJob} from "./components/Grabber";
import {getFirestore} from "./services/Firebase";

const serviceAccount = require("../serviceAccountKey.json");

(async () => {
    try {
        await updateStoreJob(getFirestore(serviceAccount));
        console.log("Finished");
    } catch (e) {
        console.error("Failed.", e);
    }
})();