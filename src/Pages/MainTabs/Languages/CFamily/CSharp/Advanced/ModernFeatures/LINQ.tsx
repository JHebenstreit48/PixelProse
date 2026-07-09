import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
