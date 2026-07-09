import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
