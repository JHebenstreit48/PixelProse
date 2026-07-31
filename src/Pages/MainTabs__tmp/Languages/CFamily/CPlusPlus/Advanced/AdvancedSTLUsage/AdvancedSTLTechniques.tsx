import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
