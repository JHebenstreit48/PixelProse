import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
