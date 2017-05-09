/**
 * Created by George on 09/05/2017.
 *
 Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

 If you want to know more http://en.wikipedia.org/wiki/DNA

 In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

 DNA_strand ("ATTGC") # return "TAACG"

 DNA_strand ("GTAT") # return "CATA"
 */
function DNAStrand(dna){
    //your code here
    if(typeof(dna)!=='undefined'){

        if(dna=='') return false;

        var newDNAStrand = '';

        for(var i=0;i<dna.length;i++){
            switch(dna[i]){
                case('A'):
                    newDNAStrand += 'T';
                    break;
                case('T'):
                    newDNAStrand += 'A';
                    break;
                case('C'):
                    newDNAStrand += 'G';
                    break;
                case('G'):
                    newDNAStrand += 'C';
                    break;
                default:
                    return false;
            }
        }
        return newDNAStrand;
    }
}
