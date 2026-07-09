import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AdvancedSTLTechniques = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/AdvancedSTLTechniques';

  return (
    <>
      <PageLayout>
        <PageTitle title="Advanced STL Techniques" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AdvancedSTLTechniques;
