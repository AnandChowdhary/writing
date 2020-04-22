---
title: COVID-19 open source
documentId: 1UdAPDdDPQs15APphFxT-6KMi6YfYHtYTN3ufo6SOUU0
revisionId: ALm37BUNUi-nfjfqrPIRlZXDjVfGrhPZEAEfAgnpWkASOGAVdeE0oP8F0EKedqfz4WblWPttVM1eMHHBf6c5L3o
---

# How nonprofits in India are using open source during COVID-19

Open source code has become a powerful tool to bring people together during the COVID-19 pandemic. In India, we’ve seen developers work remotely to build mobile apps, websites, trackers, and open APIs to make sure everyone has access to the best-available information. Some of my favorite open source resources are [Covid19India.org](https://www.covid19india.org), which visualizes the number of cases, and [IndiaSmile.org](https://indiasmile.org), which shows you the nearest confirmed case based on your location.

For NGOs working on the ground to help those most affected during the lockdown, this is an incredibly busy time. However, a lot of man hours are wasted on tasks that can be automated, like generating and sending 80G tax-deduction receipts to donors, or onboarding new volunteers and training them with safety procedures. Excitingly, this time is different. We’re seeing nonprofits not only embrace new open source solutions during the pandemic, but also invent new ones.

## Karuna 2020

Since I got back to India last month, I’ve been working on a new project along with a very talented team of volunteers from startups, corporates, and nonprofits. Karuna 2020 is an initiative to help sustain those most affected, such as daily wage earners who do not earn an income during the lockdown.

We've built a Dry Ration Pack consisting of 10 kg rice, 2 kg dal (Indian pulses), 1 kg salt, 1 L mustard oil, 4 soap bars, and 100 g Indian spices, which will help sustain a family of 4–5 for 1 month. So far, we've distributed over 2,000 such kits in and around New Delhi, helping feed over 10,000 people for a month, along with distributing thousands of masks to police and healthcare workers. To make this possible, we've raised over ₹16 lakh ($20k+), primarily from friends and family.

### Embracing open source solutions

In an effort to ensure complete transparency, we decided to upload photos of each on-ground distribution to our website. This means that every individual who receives a Karuan 2020 Dry Ration Pack has to agree to sharing their personal information such as name, address, ID, and contact number (which we keep private), and allow us to click a photo of them receiving the pack, which we publish online. Our on-ground volunteers ensure that no pack goes out without a photo being clicked.

In order to protect the beneficiaries’ privacy, we wanted to make sure we blur their faces before uploading their photo. For the first few days, this was a manual process, taking up several volunteer hours. Then, we evaluated several open source face blurring projects and finally adopted [faceblur](https://github.com/Karuna2020/faceblur), an easy-to-use Python project that uses OpenCV and face detection to blur any faces in a given photo. One of our volunteers, Shivek Khurana, founder of enterprise consultancy company Krim Labs, wrote a small script that takes all the photos in a distribution, blurs them, and uploads them to our distribution cards on Airtable, which in turn populates our website.

### Building open source systems

Vikrant Abrol, founder of social infrastructure company Unifiers and nonprofit ILSEF, shared his idea of distributing dry ration during the lockdown with me, and he built the dream team he’d want to do it with, including Anurag Kashyap, founder of nonprofit Shakti Foundation; **_INSERT NAMES HERE_**. Since then, we’ve been doing a video call at 4:00 pm every day, discussing the progress and planning the next steps. To make things easy for everyone, we began working on a central MIS spreadsheet on Google Sheets, which had tabs for material procurement, distribution requests, marketing, etc.

The first contribution I made to Karuna 2020 was to ensure we had systems in place to open source our central MIS. We used SheetDB to generate API endpoints for each tab in the spreadsheet (who were generous with credits), and started dumping the JSON data into a GitHub repository. Then, we used GitHub Pages and Cloudflare to host this repository on [open-data.karuna2020.org](https://open-data.karuna2020.org), generating a free and open API with exactly the same data that we use. I also wrote a small GitHub Actions workflow that auto-updated this data every 30 minutes, so the endpoints would always be up-to-date.

Slowly, we transitioned to Airtable as the source of truth for all data, because it allowed us to add attachments such as distribution photos to the record itself, and made it easier to onboard new volunteers and train them with our processes. Again, I updated the workflow to use the Airtable API and fetch the most recent data every 15 minutes and update the API repository. Airtable was also kind enough to give us their Pro plan for free, worth over $100 per month, as part of their COVID-19 response. We also wrote some scripts to download the attachments, generate data summaries, etc., essentially automating our “Data should be open source” goal.

This ensures that the data we use to decide where a distribution takes place, the photos of each distribution, and our progress report are, by definition, open source on GitHub. In my opinion, this should be the “default” for nonprofits — open source everything (unless it violates someone’s privacy). This generates trust among the contributions and allows people to build on top of your work.

### Open source guides and website

About two weeks into the operation, Shivek called me because he saw me building the Karuan 2020 website and open data repositories on GitHub, asking how he can help. His initial work was focused on systematizing our efforts by building open processes and guides that describe them. This was built on top of the work done by Vikrant, writing the Standard Operations Protocol for our on-ground effort.

Today, we have detailed guides about each of our processes, like managing the donor lifecycle (contacting new donors, sending receipts, etc.), onboarding volunteers (explaining our processes and how we use Airtable), assembling the Dry Ration Pack, designing creatives and posting on social media, etc. All of these guides are also open source in the same repository, converted from Google Docs to markdown, and published to our website for ease of consumption.

For example, our marketing guides describes how we create a new post on Airtable by adding a few photos and a caption, then posting it to Instagram, followed by automatic cross-posting on Facebook and Twitter, moving the card to the “Publish to website” column, and then having it show up as an update on our website and RSS feed. This entire process is open source, built using only GitHub Actions.

We also built an open source invoice generator that takes data from Airtable, generates a tax-deduction receipt in PDF for the contribution, adds the attachment to their record on Airtable, sends an email to them with the receipt, along with an SMS to thank them and to make sure they check their email. Again, this process takes place automatically when we move an Airtable record from “New donor” to “Confirmed” after checking with the bank records, and is open source, built using open source tools like Chromium’s Puppeteer.

## Helping nonprofits use open source tools

Especially in India, small-scale nonprofits are typically underfunded and overworked. They’re not at the forefront of employing new technologies or building open source solutions, because their focus is on the real groundwork that impacts millions of people. In the big picture, our goal with Karuna 2020 is not just to distribute ration, but to build open source processes, guides, tools, and APIs that nonprofits can use for free, making their operations more efficient and letting them focus on what they do best.

All the tools we’re using for Karuna 2020 are open source, and work with GitHub Actions without requiring a self-hosted instance. More importantly, we’re standing on the shoulders of giants: our website is built using Eleventy, our URL shortener uses GitHub Pages, we use JSON endpoints for open data, and all our guides are licensed CC BY 4.0. If you’re a nonprofit who can benefit from using these tools, we encourage you to fork our repositories and build on top of them.

_More text here
_

This work is currently unpublished and not available under an open source license.Copyright © 2020 Anand Chowdhary with all rights related to this article reserved.


