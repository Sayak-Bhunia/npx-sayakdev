#!/usr/bin/env node

/*_______ _________ _______  _        _       _________ _        _______    _______             _______  _______  ______   _______                              
(  ____ \\__   __/(  ___  )( \      | \    /\\__   __/( (    /|(  ____ \  (       )|\     /|  (  ____ \(  ___  )(  __  \ (  ____ \  |\     /||\     /||\     /|
| (    \/   ) (   | (   ) || (      |  \  / /   ) (   |  \  ( || (    \/  | () () |( \   / )  | (    \/| (   ) || (  \  )| (    \/  | )   ( || )   ( || )   ( |
| (_____    | |   | (___) || |      |  (_/ /    | |   |   \ | || |        | || || | \ (_) /   | |      | |   | || |   ) || (__      | (___) || |   | || (___) |
(_____  )   | |   |  ___  || |      |   _ (     | |   | (\ \) || | ____   | |(_)| |  \   /    | |      | |   | || |   | ||  __)     |  ___  || |   | ||  ___  |
      ) |   | |   | (   ) || |      |  ( \ \    | |   | | \   || | \_  )  | |   | |   ) (     | |      | |   | || |   ) || (        | (   ) || |   | || (   ) |
/\____) |   | |   | )   ( || (____/\|  /  \ \___) (___| )  \  || (___) |  | )   ( |   | |     | (____/\| (___) || (__/  )| (____/\  | )   ( || (___) || )   ( |
\_______)   )_(   |/     \|(_______/|_/    \/\_______/|/    )_)(_______)  |/     \|   \_/     (_______/(_______)(______/ (_______/  |/     \|(_______)|/     \|
                                                                                                                                                               
 _______  _       _________ _        _         _________ _______  _______           _______    _        _______  _                                             
(  ____ \| \    /\\__   __/( \      ( \        \__   __/(  ____ \(  ____ \|\     /|(  ____ \  ( \      (  ___  )( \                                            
| (    \/|  \  / /   ) (   | (      | (           ) (   | (    \/| (    \/| )   ( || (    \/  | (      | (   ) || (                                            
| (_____ |  (_/ /    | |   | |      | |           | |   | (_____ | (_____ | |   | || (__      | |      | |   | || |                                            
(_____  )|   _ (     | |   | |      | |           | |   (_____  )(_____  )| |   | ||  __)     | |      | |   | || |                                            
      ) ||  ( \ \    | |   | |      | |           | |         ) |      ) || |   | || (        | |      | |   | || |                                            
/\____) ||  /  \ \___) (___| (____/\| (____/\  ___) (___/\____) |/\____) || (___) || (____/\  | (____/\| (___) || (____/\                                      
\_______)|_/    \/\_______/(_______/(_______/  \_______/\_______)\_______)(_______)(_______/  (_______/(_______)(_______/   */


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import boxen from 'boxen';
import colors from 'colors';
import util from 'util';
import link from 'terminal-link';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function printSkill(lang, header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta', 'green', 'cyan', 'white', 'pink', 'violet']);
    let output = `${header}`.green + ' - ';
    lang.forEach((language, idx) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (idx !== lang.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function main(){
    const rainbowAnimation = chalkAnimation.rainbow(`
( ͡° ͜ʖ ͡°) 
    
    

██   ██ ██   ██ ███████ ██       ██████   ██████   ██████  
██   ██ ██   ██ ██      ██      ██    ██ ██    ██ ██    ██ 
███████ ███████ █████   ██      ██    ██ ██    ██ ██    ██ 
██   ██ ██   ██ ██      ██      ██    ██ ██    ██ ██    ██ 
██   ██ ██   ██ ███████ ███████  ██████   ██████   ██████  
                                                           
`);

await sleep(); 
rainbowAnimation.stop(); 
    
    
    console.log()
    const spinner = createSpinner(chalk.blue('loading') + ' ' + chalk.cyan("sayak's") + ' ' + chalk.white("details")).start()
    
    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    await spinnerStart();
    spinner.success();
    
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow);

    console.log()
    console.log('こんにちは (Konnichiwa)'.cyan)
    const githubLink = link('https://github.com/Sayak-Bhunia','i use arch btw');
    const websiteLInk = link('https://sayakbhunia.xyz','もう確認しましたか？');
    console.log(`name    `.green + ' - ' + 'sayak bhunia (さやくくん)'.cyan);
    console.log(`sts     `.green + ' - ' + 'undergrad'.cyan);
    console.log(`github  `.green + ' - ' + `${githubLink}`.cyan);
    console.log(`website `.green + ' - ' + `${websiteLInk}`.cyan);
    console.log()

    console.log(`
    
░█▀▀░█░█░█▀█░█▀▀░█▀▄░▀█▀░▀█▀░█▀▀░█▀▀
░█▀▀░▄▀▄░█▀▀░█▀▀░█▀▄░░█░░░█░░▀▀█░█▀▀
░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀▀▀`.yellow)

console.log()
printSkill(['react.js','next.js','tailwind'] , 'frameworks   ');
printSkill(['javascript','python','c++','vhdl','typescript'] , 'languages    ');
printSkill(['express','auth0','firebase','node.js','socket.io','prisma','shadcn','acernity','vercel'] , 'tech         ');
printSkill(['mongodb','postgresql','sql'] , 'dbs          ');
printSkill(['git','github','gcp','kaggle notebook','numpy','pandas','matplotlib','spline','figma'] , 'tools        ');


console.log()
console.log('sayak is up for hire, ready to help your company get to next heights and ofc thanks for checking out my cli!'.magenta)
console.log('ありがとう (arigato gozaimasu!)'.cyan)
console.log()
}

main()