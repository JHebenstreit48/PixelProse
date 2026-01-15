import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SequencesAndIterators = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Collections/SequencesAndIterators';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sequences & Iterators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SequencesAndIterators;
