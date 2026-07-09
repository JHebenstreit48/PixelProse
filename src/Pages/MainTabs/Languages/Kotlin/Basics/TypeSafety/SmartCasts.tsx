import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SmartCasts = () => {
  const markdownFilePath = 'Languages/Kotlin/Basics/TypeSafety/SmartCasts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Smart Casts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SmartCasts;
