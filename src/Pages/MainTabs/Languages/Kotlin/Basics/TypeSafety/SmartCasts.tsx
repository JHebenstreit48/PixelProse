import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
