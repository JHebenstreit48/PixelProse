import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SequencesAndLazy = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Collections/SequencesAndLazy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sequences & Lazy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SequencesAndLazy;
