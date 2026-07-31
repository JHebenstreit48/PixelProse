import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
