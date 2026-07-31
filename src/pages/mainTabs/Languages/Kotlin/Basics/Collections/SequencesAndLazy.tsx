import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
