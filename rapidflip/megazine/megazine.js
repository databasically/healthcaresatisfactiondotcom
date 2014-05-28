/*
 * MegaZine 3 - A Flash application for easy creation of book-like webpages.
 * Copyright (C) 2007-2009 Florian Nuecke
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Interface for calling functions in the MegaZine engine.
 * For more info see API of the respective plugins.
 *
 * Usage: onxxx="javascript:MegaZine.yyy(zzz);", where xxx is the event type, yyy is the function
 * to call, and zzz are possible parameters. Example: onclick="javascript:MegaZine.nextPage();"
 */
MegaZine = {
	// Name of the movie (flash object). This should be the value of the id set in the embedSWF call.
	moviename : "megazine",
	
	/*
	 * Adjust the following functions to handle events.
	 */
	
    // ---------------------- JavaScript Plugin ---------------------- //
    
	// Called when the current page changes. page will always be an even number.
	onPageChange : function(page) {
	},
	
	// Called when sounds should be muted.
	onMute : function() {
	},
	
	// Called when sounds are no longer muted.
	onUnmute : function() {
	},
	
	// Called when the MegaZine instance's status changes.
	onLoadStateChange : function(state, prevstate) {
	},
	
	// Called when the MegaZine instance's flip status changes (pages moving or not).
	onFlipStateChange : function(state, prevstate) {
	},
	
    // ---------------------- SlideShow Plugin ---------------------- //
    
	// Called when the automatic page turning (slideshow) is started.
	onSlideStart : function() {
	},
	
	// Called when the automatic page turning (slideshow) is stopped.
	onSlideStop : function() {
	},
	
    // ---------------------- Gallery Plugin ---------------------- //
    
	// Called when the displayed image in a gallery changes.
	// page is the number of the page containing the now displayed image.
	onGalleryElementChange : function(page) {
	},
	
	// Called when the gallery is opened.
	onGalleryOpen : function() {
	},
	
	// Called when the gallery is closed.
	onGalleryClose : function() {
	},
	
	
    
	/*
	 * !!! Do not change the following functions, just call them !!!
	 */
	
	/* This utility function resolves the string movie to a Flash object reference based on browser type. */
	getMovie : function() { return (navigator.appName.indexOf("Microsoft") != -1) ? window[MegaZine.moviename] : document[MegaZine.moviename]; },
	
    // ---------------------- JavaScript Plugin ---------------------- //
    
	// Returns current page number (always an even number).
	getCurrentPage     : function() { return MegaZine.getMovie().getCurrentPage(); },
	// Returns number of pages in the book.
	getPageCount       : function() { return MegaZine.getMovie().getPageCount(); },
	// Returns page height.
	getPageHeight      : function() { return MegaZine.getMovie().getPageHeight(); },
	// Return page width.
	getPageWidth       : function() { return MegaZine.getMovie().getPageWidth(); },
	// Return flip state (page moving or not).
	getFlipState       : function() { return MegaZine.getMovie().getFlipState(); },
	// Return state (loading, ready).
	getLoadState       : function() { return MegaZine.getMovie().getLoadState(); },
	// Navigate to a page in the book.
	gotoPage           : function(page, instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoPage(page, instant); },
	// Navigate to the first page in the book.
	gotoFirstPage      : function(instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoFirstPage(instant); },
	// Navigate to the last page in the book.
	gotoLastPage       : function(instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoLastPage(instant); },
	// Navigate to the next page.
	gotoNextPage       : function(instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoNextPage(instant); },
	// Navigate to the previous page.
	gotoPrevPage       : function(instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoPrevPage(instant); },
	// Returns whether shadows are enabled.
	hasShadows         : function() { return MegaZine.getMovie().hasShadows(); },
	// Returns if reflections are enabled.
	hasReflection      : function() { return MegaZine.getMovie().hasReflection(); },
	// Return if mouse interaction with pages is enabled.
	isDraggingEnabled  : function() { return MegaZine.getMovie().isDraggingEnabled(); },
	// Return if sounds are muted.
	isMuted            : function() { return MegaZine.getMovie().isMuted(); },
	// Set whether mouse interaction with pages is enabled.
	setDraggingEnabled : function(enable) { MegaZine.getMovie().setDraggingEnabled(enable); },
	// Set muted state for sounds.
	setMuted           : function(mute) { MegaZine.getMovie().setMuted(mute); },
	// Sets shadow usage.
	setShadows         : function(enabled) { MegaZine.getMovie().setShadows(enabled); },
	// Sets reflection usage.
	setReflection      : function(enabled) { MegaZine.getMovie().setReflection(enabled); },
    
    // ---------------------- Anchors Plugin ---------------------- //
    
	// Returns current anchor. Can be null.
	getCurrentAnchor   : function() { return MegaZine.getMovie().getCurrentAnchor(); },
	// Returns anchor of the given page in the book.
	getPageAnchor      : function(page) { return MegaZine.getMovie().getPageAnchor(page); },
	// Navigate to an anchor in the book.
	gotoAnchor         : function(id, instant) { if (instant == null) instant = false; MegaZine.getMovie().gotoAnchor(id, instant); },
    
    // ---------------------- Slideshow Plugin ---------------------- //
    
	// Start slideshow / automatic page turning.
	slideStart         : function() { MegaZine.getMovie().slideStart(); },
	// Stop slideshow / automatic page turning.
	slideStop          : function() { MegaZine.getMovie().slideStop(); },
    
    // ---------------------- Gallery Plugin ---------------------- //
    
	// Return whether the gallery is currently open.
	isGalleryOpen      : function() { return MegaZine.getMovie().isGalleryOpen(); },
	// Rotate the current image counterclockwise if gallery is open (else returns false).
	galleryRotateLeft  : function() { return MegaZine.getMovie().galleryRotateRight(); },
	// Rotate the current image clockwise if gallery is open (else returns false).
	galleryRotateRight : function() { return MegaZine.getMovie().galleryRotateRight(); },
	// Zoom in if gallery is open (else returns false).
	galleryZoomIn      : function() { return MegaZine.getMovie().galleryZoomIn(); },
	// Zoom out if gallery is open (else returns false).
	galleryZoomOut     : function() { return MegaZine.getMovie().galleryZoomOut(); },
};
