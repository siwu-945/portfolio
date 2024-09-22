---
title: 'x and not x = False.'
author: Siwu Li
date: '2024/2/24'
lastmod: '2024/2/24'
tags: [Russell, Logic, Philosophy]
draft: false
summary: 'It is physically impossible to imagine or refer to a thing such as a round square. Because there is no such x that exists that fits all the conditions listed. To simplify this, saying a round square exists is like saying something like x = !x'
images: ['/static/images/articles/x.jpg']
layout: PostLayout
---

## Preface

Babies learn about the new world by looking, touching, and hearing the brand-new objects around them. All of their understandings of this world have to come from their “acquaintance” of the objects surrounding them, of course, one cannot use language to describe an object and hope a baby can understand that object of which he or she has no first direct contact of. But when the baby starts to think about many things that he or she has no acquaintance with, that baby has matured into a phase where logic is real to them. Logical analysis is thus important in helping humans to understand things they are not familiar with. Only through logical formulation can a person understand things that he or she has never been in direct contact with.

## Introduction

Bertrand Russell’s “On Denoting” and “Descriptions” tackle the complexities of language and its relationship to the world. Both papers delve into the topics of implications of propositions, as well as definite and indefinite descriptions. As Russell highlighted, since humans cannot directly perceive someone else’s thoughts or experiences, “what we know about them is obtained through denoting.” (Russell, “On Denoting” 105). In other words, humans use various forms of communication such as descriptions and expressions in a language to infer what others are thinking.

There are two major ways in which a human gains an understanding of knowledge: learning from acquaintance and learning from description.

Knowing by acquaintance comes from the perception of the object, and brings that knowledge into a “more abstract logical character”(Russell, “On Denoting” 105). Just like the baby learning about the new world, knowing by acquaintance is the simplest and the direct way of converting something into an abstract logical form. But there are a lot of times when people do not have the chance to gain a first-hand perception of the object, so they can only know through denoting and gaining acquaintance from it. Therefore it is important in human communication and understanding of this world to have a correct abstract logical character of things.

One has to understand the logical structure of a statement and make sure the objects being denoted in the communications are true, so as to make a valid argument. Both of Russell’s papers demonstrated the important relationship between language and knowledge because, without a correct correlation between language and knowledge, humans won’t ever be “acquainted with other people’s minds” (Russell, “On Denoting” 105). By clarifying the function of language in denoting objects and providing examples of how non-existent objects don’t work in a logical structure, Bertrand Russell illustrated how logical fallacy statements are common and are always ignored in their daily communication.

## Definite Descriptions and Indefinite Descriptions

Some statements seem to express meaning but when examined with a closer look, it is contradictory and logically inadequate. Russell has divided descriptions into two categories: definite descriptions and indefinite descriptions. The definite descriptions can have the form “the F” (which denotes a uniquely existential quantity) and indefinite descriptions can have the form “an F” (which denotes existential quantities) (Ludlow 1). It will be easier to understand their differences when breaking them down into logical structures. But before getting deep into the differences between definite and indefinite descriptions and how they relate to one another in a statement, it is important to distinguish the differences between names and descriptions.

Suppose there is a property, ɸ, and an individual variable, x. The individual variable x has the property of ɸ which can be expressed as ɸx and this expression is “always true.” Therefore, it can be also alluded that whatever name was plugged in for x, this statement will be a “true statement”. For example, when using the law of identity:

<div align="center">

$$
x = x
\tag{1}
$$

</div>
 
 This statement will always be true if x is substituted with any other kind of name people choose. One can say x is:

<div align="center">

$$
Socrates = Socrates
\tag{2}
$$

$$
Plato = Plato
\tag{3}
$$

</div>

For example, if people assume the variable to be plugged in is “the author of Waverley.” One cannot say:

$$
\text{the author of Waverley} = \text{the author of Waverley}
\tag{4}
$$

without further premises. Readers might argue that “the author of Waverley = the author of Waverley” is a true statement because it is as simple as “x = x.” But it is different because in order for the statement “the author of Waverley = the author of Waverley” to be true, one has to assume a hidden premise: there exists a unique individual who satisfies the description “the author of Waverley.” To break this down, one has to make two premises: 1. There exists an individual who is “the author of Waverley.” 2. There exists only one individual who is “the author of Waverley.”

Unlike equation 1, which is just a a simple equality statement saying a name is equal to the name itself, “x = x,” the statement in equation 4 is true if and only if:

$$
\exists x(Fx \land \forall y(Fy \rightarrow x = y))
\tag{5}
$$

In this case, the above logical structure implies that x and y are individuals, and the property F is “the author of Waverley”. The whole expression implies that there exists an x that is the author of Waverley, and for all y, if y fits under the property F (that y is the author of Waverley), then y must be x. No matter what variable, name, or description that people try to substitute for y, if y has the property of F, then that name/description y must actually be x, not any other object. This means the statement “the author of Waverley = the author of Waverley” is only true under the conditions described above.

Therefore, the statement alone is not always true if it substitutes a description because one has to always make multiple assumptions. In other words, the statement itself cannot be true. What if there is no such person who is the author of Waverley? Or multiple people are the author of Waverley? The logical structure described by eq.5 is not as simple as the one described by eq. 1.

Eq. 3 has to add a hidden premise (or a few) to make sense. That’s why people can use this propositional function for proper names but not for descriptions. Examples illustrated by eq.1 -5 further prove the point of how easily people can be negligent when dealing with everyday communication. Just by swapping a name and a description into the function, the whole logical structure has changed and the truth value of the whole statement can be ambiguous.

## Unicorns and the Round Square

Another easy logical fallacy people can make is referring to a non-existent object in a statement. Russell claims that one cannot make an argument referring to a non-existent object, such as an unicorn. Many can argue that in nowadays, people always refer to non-existent objects in their daily communications. However, with careful examination, referring to a non-existent object doesn’t make sense.

Some can argue that someone can use a precise description as listed in eq.5 to make sure they are talking about the same non-existent object: by imposing the description, F, on the non-existent subject, x, and all y shares the same description F to make sure people are referring and talking to a same non-existent object. But the sentence itself doesn’t make sense, because how can one talk to something that does not exist? Like the round square. How can people come up with a description F on a round square (x) so that

$$
\exists x(Fx \land \forall y(Fy \rightarrow x = y))
$$

It is physically impossible to imagine or refer to such a thing as a round square. Because there is no such x that exists that fits all the conditions listed. To simplify this, saying a round square exists is like saying something like this:

$$
\exists x = \nexists x
\tag{6}
$$

Like eq.6 indicated, in order to transform the round square into a logical form, one has to assume there exists an x (round square) while at the same hand, the x doesn’t exist. The contradictory nature of a round square is baffling in a logical statement.

Some might argue, however, there exists a lot of descriptions of a non-existent object. If it is a logical fallacy to describe a non-existent object, then why do those descriptions exist? Looking at a modern example, Santa Claus, one can see that descriptions of non-existent objects are not enough. Out of so many descriptions people could have imposed on Santa Clause, which description is the correct one that can successfully refer to Santa Clause? Should people refer to the non-existent Santa Clause according to an Ireland description or the American descriptions of the Santa Clause? Others might also argue that since Santa is fictional, Santa can have multiple descriptions because it is just impossible to describe a non-existent object and he “exists” because of those multiple descriptions. So whichever description is imposed on Santa doesn’t matter. But if one can impose multiple descriptions on this simple subject, then this subject is not a unique individual and there is no way one can assure the other is thinking about the same Santa they were talking about. This is fatal when people have their first knowledge about Santa, not through the knowledge of acquaintance, but falsified and ambiguous descriptions.

## The present king of France does not exist

To make it clear that a non-existent object can confuse and even falsify a statement, one can look at another example provided by Russell: “the present king of France does not exist” (“Description” 115). This statement can have two meanings: 1. There does not exist a person such that person is the king of France and that person
exists. 2. There is no present king of France

It is clear to see that when introducing a non-existent entity (the present King of France), the ambiguity remains and readers can not interpret the real meaning of this statement. Just like Russell himself described, “every proposition in which a description which describes nothing has a primary occurrence is false” (“Description” 120). This sense of confusion that the non-existent entity has brought to the logical statement tends to introduce logical fallacies and therefore it is not logical to include these kinds of descriptions in human communication. To further illustrate the point of how a non-existent entity doesn’t make sense in logical communication, one can break down the two statement meanings provided above into logical forms and analyze each one of them.

$$
\exists x(Fx \land \nexists x)
\tag{7}
$$

$$
\neg (\exists x(Fx))
\tag{8}
$$

As shown by eq.7 and eq.8, it is clear that one simple sentence “the present king of France does not exist” is not a simple statement since it can be interpreted into 2 totally different logical forms. And with a closer look, the whole logical statement doesn’t make sense because it is describing a non-existent object. In the logical statement, Fx stands for there exists an x that fits the description of F, which means Fx stands for there is a present King of France. But in reality, there is no present King of France! So to convert the statement “the present king of France does not exist” into a logical form, one has to create a false premise (description). And purposefully bringing a false premise in a logical statement doesn’t make sense, because any conclusion made on false assumptions should be false. One cannot get anywhere with a false assumption and a false conclusion. Therefore, the logical structure that defines definite descriptions isn’t capable of representing this sentence.

On the other hand, one can try to argue that eq.8 is meaningful and therefore a non-existent entity in a statement should be acceptable. Looking at eq.9 closely, it means there is no individual x which has the property of being the present king of France. It negates the whole statement that “there is an individual who is the King of France.” So people don’t have to worry about whatever is inside the negated function because whatever is inside is negated. Furthermore, it's not acceptable to quantify (describe) things that don’t exist. For example, humans cannot physically imagine an object that is a round square. Because it simply doesn’t exist. Similarly, there simply cannot exist an x that doesn’t exist. Therefore, it is reasonable to conclude the logical structure

$$
\neg (\exists x(Fx))
$$

is false. And now it is clear why Russell is in such disagreement with Alexius Meinong’s theory — an Austrian philosopher who claims that if the objective in a statement does not exist, then the statement is false — because there doesn’t exist a creature that is a unicorn. A unicorn wouldn’t fit in the logical structure.

At the heart of Russell’s theory is his emphasis on clarity and precision. It is important to understand the logical validity in daily conversation because people always use logically incorrect sentences without realizing them. In fact, there are a lot of interchangeable uses of name and description, but in essence, the use of a description in substitution of a name can completely change the logical validity of that statement. Therefore it should be taken with great care when dealing with definite and indefinite descriptions because it can introduce ambiguity to the meaning of the statement. Furthermore, although including non-existent objects in daily conversation is a norm, those objects themselves won’t clarify any thoughts people want to express and certainly don’t help in establishing the validity of a logical statement.

---

Thanks for reading about x and not x equals False, you can reach out to me via email if you have any questions or want to share your thoughts. This is for my personal blog only, please do not copy the content without permission.
