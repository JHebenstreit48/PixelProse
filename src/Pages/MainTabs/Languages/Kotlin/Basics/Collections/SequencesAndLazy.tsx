import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SequencesAndLazy = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/Collections/SequencesAndLazy';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sequences & Lazy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SequencesAndLazy;
