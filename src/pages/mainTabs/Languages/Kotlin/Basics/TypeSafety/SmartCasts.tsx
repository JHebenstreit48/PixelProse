import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
