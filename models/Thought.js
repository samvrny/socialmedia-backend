const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //insert formatting logic here
        }
    },
    {
        toJSON: {
            virtuals: true,
            //insert getters if needed
        }
    }
);

const ThoughtSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //insert formatting here
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            //getters here if needed
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;