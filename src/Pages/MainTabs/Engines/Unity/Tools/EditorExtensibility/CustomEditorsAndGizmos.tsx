import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomEditorsAndGizmos = () => {
  const markdownFilePath = 'Engines/Unity/Tools/EditorExtensibility/CustomEditorsAndGizmos';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Editors & Gizmos" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomEditorsAndGizmos;
