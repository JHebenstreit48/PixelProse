import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CustomEditorsAndGizmos = () => {
  const markdownFilePath = 'Engines/Unity/Tools/EditorExtensibility/CustomEditorsAndGizmos';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Editors & Gizmos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomEditorsAndGizmos;
