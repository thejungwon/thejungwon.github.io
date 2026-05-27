---
title: "Master's Thesis: Minimum Word Error Rate Training for Speech Separation"
date: "2019-06-30"
tags: ["Master's Thesis", "Speech Separation", "ASR", "Weighted Loss"]
excerpt: "M.S. thesis introducing WER-guided weighted loss for speech separation training."
---

# Minimum Word Error Rate Training for Speech Separation

This post summarizes my M.S. thesis work at the University of Stavanger.

## Thesis Information

- Title: **Minimum Word Error Rate Training for Speech Separation**
- Supervisor: **Tomasz Wiktorski**
- NVA record: https://nva.sikt.no/registration/019903f37e7a-54d82b2c-62ec-4df4-bbeb-cfb25fd257a6
- Project code and demo: https://github.com/thejungwon/mwetss

## Core Contribution

The key idea was to modify the conventional speech separation objective with a **WER-guided weighted loss**:

- Start from the standard speech separation loss.
- Use a pre-trained speech recognition model to estimate recognition quality.
- Apply WER-based weighting so the separation model emphasizes samples/regions that matter more for downstream recognition.
- Train the separator with this weighted objective instead of a purely signal-level loss.

In short, the thesis tied separation training more directly to recognition outcomes, not only waveform/spectrogram similarity.
