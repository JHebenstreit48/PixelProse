import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LINQ = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/ModernFeatures/LINQ';

  return (
    <>
      <PageLayout>
        <PageTitle title="LINQ" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LINQ;
