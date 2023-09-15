# ESP-32 Dev Information

### Pinout Guide
<div class="md-typeset__scrollwrap">
    <div class="md-typeset__table">
        <table>
            <thead>
                <tr>
                    <th>Features</th>
                    <th>Pin ID</th>
                    <th>Pin Location</th>
                    <th>CENTER</th>
                    <th>Pin Location</th>
                    <th>Pin ID</th>
                    <th>Features</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><abbr title="Provides 3.3 volts of power to anything connected.">3.3V</abbr></td>
                    <td class="power3-pin"><abbr title="Provides 3.3 volts of power to anything connected.">3.3V</abbr></td>
                    <td>1</td>
                    <td></td>
                    <td class="ground-pin"><abbr title="Ground">GND</abbr></td>
                    <td>38</td>
                    <td><abbr title="Ground">GND</abbr></td>
                </tr>
                <tr>
                    <td>EN</td>
                    <td>EN</td>
                    <td>2</td>
                    <td></td>
                    <td class="digital-pin">GIOP23</td>
                    <td>37</td>
                    <td><abbr title="VSPI pins are used for connections with other microcontrollers.">VSPI</abbr> <abbr
                            title="Master Out, Slave In, used for listening to other microcontrollers.">MOSI</abbr></td>
                </tr>
                <tr>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 0</td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 36</td>
                    <td>3</td>
                    <td></td>
                    <td class="digital-pin">GIOP22</td>
                    <td>36</td>
                    <td><abbr
                            title="Inter Integrated Circuit, used for communicating with more than one microcontroller.">I2C</abbr>
                        SCL</td>
                </tr>
                <tr>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 3</td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 39</td>
                    <td>4</td>
                    <td></td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 1</td>
                    <td>35</td>
                    <td>TX0 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 6</td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 34</td>
                    <td>5</td>
                    <td></td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 3</td>
                    <td>34</td>
                    <td>RX0 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 7</td>
                    <td><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 35</td>
                    <td>6</td>
                    <td></td>
                    <td class="digital-pin">GIOP 21</td>
                    <td>33</td>
                    <td>i2C SDA</td>
                </tr>
                <tr>
                    <td><abbr title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 9 - <abbr
                            title="Analog to Digital Converter">ADC</abbr> 4</td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 32</td>
                    <td>7</td>
                    <td></td>
                    <td class="ground-pin"><abbr title="Ground">GND</abbr></td>
                    <td>32</td>
                    <td><abbr title="Ground">GND</abbr></td>
                </tr>
                <tr>
                    <td><abbr title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 8 - <abbr
                            title="Analog to Digital Converter">ADC</abbr> 5</td>
                    <td class="digital-pin"  ><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 33</td>
                    <td>8</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 19</td>
                    <td>31</td>
                    <td><abbr title="VSPI pins are used for connections with other microcontrollers.">VSPI</abbr> <abbr
                            title="Master In, Slave Out, used for communicating to other microcontrollers.">MISO</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Digital to Analog Converter">DAC</abbr> 1 <abbr
                            title="Analog to Digital Converter">ADC</abbr> 18</td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 25</td>
                    <td>9</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 18</td>
                    <td>30</td>
                    <td><abbr title="VSPI pins are used for connections with other microcontrollers.">VSPI</abbr> SCK
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Digital to Analog Converter">DAC</abbr> 2 <abbr
                            title="Analog to Digital Converter">ADC</abbr> 19</td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 26</td>
                    <td>10</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 5</td>
                    <td>29</td>
                    <td><abbr title="VSPI pins are used for connections with other microcontrollers.">VSPI</abbr> SS -
                        <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Provides 3.3 volts of power to anything connected.">3.3V</abbr></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 27</td>
                    <td>11</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 17</td>
                    <td>28</td>
                    <td>TX2</td>
                </tr>
                <tr>
                    <td><abbr title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 6 - <abbr
                            title="Analog to Digital Converter">ADC</abbr> 16 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 14</td>
                    <td>12</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 16</td>
                    <td>27</td>
                    <td>RX2</td>
                </tr>
                <tr>
                    <td><abbr title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 5 - <abbr
                            title="Analog to Digital Converter">ADC</abbr> 15 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 12</td>
                    <td>13</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 4</td>
                    <td>26</td>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 10 - <abbr
                            title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 0 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Ground">GND</abbr></td>
                    <td class="ground-pin"><abbr title="Ground">GND</abbr></td>
                    <td>14</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 0</td>
                    <td>25</td>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 11 - <abbr
                            title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 1 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 4 - <abbr
                            title="Analog to Digital Converter">ADC</abbr> 14 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 13</td>
                    <td>15</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 2</td>
                    <td>24</td>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 12 - <abbr
                            title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 2 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td>RX 1 - FLASH D2 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="orange-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 9</td>
                    <td>16</td>
                    <td></td>
                    <td class="digital-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 15</td>
                    <td>23</td>
                    <td><abbr title="Analog to Digital Converter">ADC</abbr> 13 - <abbr
                            title="A pin you can touch to turn into electrical signal.">TOUCH</abbr> 3 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td>TX 1 - FLASH D3 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="orange-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 10</td>
                    <td>17</td>
                    <td></td>
                    <td class="orange-pin">GIOP8</td>
                    <td>22</td>
                    <td>FLASH D1 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td>FLASH CMD - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                    <td class="orange-pin"><abbr title="General Input Output Pin. Suitable for most uses.">GIOP</abbr> 11</td>
                    <td>18</td>
                    <td></td>
                    <td class="orange-pin">GIOP7</td>
                    <td>21</td>
                    <td>FLASH D0 - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
                <tr>
                    <td><abbr title="Provides 5 volts of power to anything connected.">5V</abbr></td>
                    <td class="power5-pin"><abbr title="Provides 5 volts of power to anything connected.">5V</abbr></td>
                    <td>19</td>
                    <td></td>
                    <td class="orange-pin">GIOP6</td>
                    <td>20</td>
                    <td>FLASH CK - <abbr
                            title="This pin features pulse width modulation, suitable for use with a servo.">PWM</abbr>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>