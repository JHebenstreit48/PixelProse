import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NullSafety = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/TypeSafety/NullSafety';

  return (
    <>
      <PageLayout>
        <PageTitle title="Null Safety" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NullSafety;
