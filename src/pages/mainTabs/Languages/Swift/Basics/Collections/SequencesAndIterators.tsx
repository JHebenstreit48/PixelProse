import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SequencesAndIterators = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Collections/SequencesAndIterators';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sequences & Iterators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SequencesAndIterators;
